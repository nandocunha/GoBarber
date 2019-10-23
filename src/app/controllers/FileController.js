class FileController {
  async store(res, req) {
    return res.json(req.file);
  }
}

export default new FileController();
