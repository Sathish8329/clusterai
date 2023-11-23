import { executeErrorLog } from "../../../error-logger/errorLogger";
import { generetaesalthash, newConnection } from "../../../utils";
import CryptoJS from "crypto-js";
var jwt = require("jsonwebtoken");
const { Worker } = require("worker_threads");

export const login = async (request, reply, fastify) => {
  try {
    //Calling login function to check credential is valid or not
    let output = await loginHander(request, request.headers, fastify);
    //sending response
    reply.code(200).send({
      statusCode: output.statusCode,
      type: output.type,
      message: output.message,
      data: { ...output.data },
    });
  } catch (err) {
    executeErrorLog(request, err);
    reply.code(500).send({
      statusCode: 500,
      type: "Error",
      message: err.message,
      ...err,
    });
    fastify.log.error(err);
  }
};

const loginValidation = (request, subDomain, custom_domain_name) => {
        console.log(request?.headers?.referer)
  return (
    request?.headers &&
    request?.headers?.referer &&
    request?.headers?.referer != process.env.FRONT_END_URL + "/" &&
    !(subDomain && request?.headers?.referer?.includes(subDomain)) &&
    !(
      custom_domain_name &&
      request?.headers?.referer?.includes(custom_domain_name)
    ) &&
    !request?.headers?.referer?.includes("localhost") &&
    !request?.headers?.referer?.includes("engage") &&
          !request?.headers?.referer?.includes("http://35.154.125.90:3000/") &&
    !request?.headers?.referer?.includes("http://172.16.0.157/")
  );
};

export const loginHander = async (request, reply, fastify) => {
  const { email, subDomain, mobile, countryCode, otp } = request.body;
  let password = "";
  if (email) {
    password = CryptoJS.AES.decrypt(
      request.body.password,
      process.env.JWT_SECRET
    ).toString(CryptoJS.enc.Utf8);
  }
  return new Promise(async (resolve, reject) => {
                                                                                                                                                                                                9,8           Top
