import { Toggle } from "./enums";

export interface GoAModSettings {
	promiseCharm: Toggle;
	shorterDay5: Toggle;
}

export const defaultGoAModSettings: GoAModSettings = {
	promiseCharm: Toggle.ON,
	shorterDay5: Toggle.ON,
};