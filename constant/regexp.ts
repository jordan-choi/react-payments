const REGEXP = {
  ONLYNUMBER: /^[0-9]/,
  NAME: /^(?=.*[ㄱ-ㅎ|가-힣|a-z|A-Z])(?=.{,30})/,
  PASSWORD: /^[0-9]{4,}/,
  MONTH: /(0[1-9]|1[0-2])/,
};

export default REGEXP;
