          subpermissions: [...new Set(e.subpermissions)],
        };
      });

      let token = jwt.sign(
        {
          email: docs?.[0]?.email,
          user_id: docs?.[0]?._id,
          client_id: docs?.[0]?.client_id,
          entity_id: docs?.[0]?.entity_id,
          slug: slugdata,
          timeStamp: new Date().toISOString(),
        },
        process.env.JWT_SECRET
      );

      resolve({
        statusCode: 200,
        type: "Success",
        message: "Authenticated",
        data: {
          token,
          ...{
            email: docs?.[0]?.email,
            img_url: docs?.[0]?.img_url,
            user_id: docs?.[0]?._id,
            role_data: "",
            reporting_to: docs?.[0]?.reporting_to,
            role: LogedUserRole,
            name: docs?.[0]?.name,
            entity_id: docs?.[0]?.entity_id,
            client: clientDetail,
            permissiondata: structuredValueresult,
            customrole: LogedUserRole,
            employeeid: docs?.[0]?.emp_id,
            employeelocation: docs?.[0]?.employeelocation,
            gender: docs?.[0]?.gender,
            managerid: managerdata?.emp_id,
            user_phone: docs?.[0]?.phone,
            country_code: docs?.[0]?.country_code,
            managername: managerdata?.name,
            manageremail: managerdata?.email,
            managerphone: managerdata?.phone,
            // subpermission: structuredSub,
          },
        },
      });
    } catch (err) {
      executeErrorLog(request, err);
      reject({
        statusCode: 500,
        message: "Internal Server Error, Try agian later!",
        err,
      });
    }
  });
};
                                                                                                                                                                                                462,8         Bot
