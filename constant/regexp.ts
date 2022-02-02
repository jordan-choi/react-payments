const REGEXP = {
  ONLYNUMBER: /^[0-9]/,
  USERNAME: /^(?=.*[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9])(?=.{6,})/,
  PASSWORD: /[0-9]{4,}/,
};

export default REGEXP;
