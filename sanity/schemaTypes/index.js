import { B2BType } from "./B2BType";
import { B2CType } from "./B2CType";
import { BCType } from "./BCType";
import { MCType } from "./MCType";
import { mediaType } from "./mediaType";
import { postType } from "./postType";
import { WCPType } from "./WCPType";

export const schema = {
  types: [postType, mediaType, WCPType, B2BType, B2CType, MCType],
};
