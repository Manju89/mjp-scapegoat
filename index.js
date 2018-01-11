import SampleJS from "./SampleJS";

export const escape = (html) => {
    let sampleJS = new SampleJS();
    return sampleJS.customMethod(html);
};

const CustomAPI = {
    escape
};

export default CustomAPI;
