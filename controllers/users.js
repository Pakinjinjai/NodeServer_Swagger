const userModel = require('../schemas/users')
const { passwordHashing, passwordCompare } = require('../configs/Hash')
const { createJWT } = require('../configs/JWT');
const dayjs = require("dayjs")

//สมัครสมาชิก
const register = async (req, res) => {
    try {
      const { username, password, status } = req.body;
  
      if (status != undefined) {
        return res.status(400).json({ message: "เกิดข้อผิดพลาด" });
      }
  
      const existsUser = await userModel.findOne({ username: username });
  
      if (existsUser) {
        return res.status(400).json({ message: "มีผู้ใช้งานอยู่ในระบบ" });
      }
  
      const passwordHash = await passwordHashing(password);
      req.body.password = passwordHash;
      req.body._id = dayjs().unix();
  
      const user = await userModel.create(req.body);
      return res.status(201).json({ message: "สร้างรหัสผ่านสำเร็จ", user: user });
    } catch (err) {
      return res.status(400).json(err);
    }
  };
//เข้าสู่ระบบ
  const login = async (req, res) => {
    const { username, password } = req.body; //username,password
  
    const existUser = await userModel.findOne({ username: username });
  
    if (!existUser) {
      return res.status(404).json({ message: "ไม่พบผู้ใช้งาน" });
    }
  
    const correctPassword = await passwordCompare(password, existUser.password);
  
    if (!correctPassword) {
      return res.status(401).json({ message: "อีเมล์หรือรหัสผ่านไม่ถูกต้อง" });
    }
  
    const accessPayload = {
      principal: existUser._id, // 54654231
      status: existUser.role, //" 2 "
      kind: "access",
    };
  
    const accessToken = createJWT(accessPayload);
  
    return res
      .status(200)
      .json({ message: "เข้าสู่ระบบสำเร็จ", accessToken: accessToken });
  };
//อัพเดทข้อมูล

  module.exports = {
        register,
        login,
  };