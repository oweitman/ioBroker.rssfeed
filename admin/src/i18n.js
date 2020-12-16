import I18norign from "@iobroker/adapter-react/i18n";
import I18ndebug from "./i18nd";


const I18n = (process.env.NODE_ENV=="production") ? I18norign : I18ndebug;
export default I18n;


