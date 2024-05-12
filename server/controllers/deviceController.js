const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, description, brandId, typeId } = req.body;
      const { img } = req.files;

      const fileNames = img.map((image) => {
        const fileName = uuid.v4() + ".jpg";
        image.mv(path.resolve(__dirname, "..", "static", fileName));
        return fileName;
      });

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        description,
        img: JSON.stringify(fileNames),
      });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll();
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId } });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId } });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { brandId, typeId } });
    }
    return res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const device = await Device.findOne({ where: { id } });

      if (!device) {
        return next(ApiError.notFound("Device not found"));
      }

      await Device.destroy({ where: { id } });

      return res.json({ message: "Device deleted successfully" });
    } catch (error) {
      next(ApiError.internalServerError(error.message));
    }
  }
  async search(req, res, next) {
    try {
      const { typeId } = req.body;

      const device = await Device.findAll({ where: { typeId: typeId } });
      return res.json({ device });
    } catch (error) {}
  }
}

module.exports = new DeviceController();
