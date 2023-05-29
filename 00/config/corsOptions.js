// Cross Origin Resource
const whiteList = [
  "http://localhost:3500",
  "https://www.google.com",
  "https://www.naver.com",
];
const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOption;
