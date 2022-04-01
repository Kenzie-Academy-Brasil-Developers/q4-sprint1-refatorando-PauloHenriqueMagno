const validate = (schema) => async (req, res, next) => {
  const resource = req.body;

  try {
    await schema.validate(resource);
    return next();
  } catch (e) {
    return res.status(400).json({ error: e.errors.join(", ") });
  }
};

export default validate;
