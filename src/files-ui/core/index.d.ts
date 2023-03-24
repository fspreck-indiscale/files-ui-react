export { DropzoneEnglish, DropzoneFrench, DropzoneItalian, DropzoneLocalizer, DropzoneLocalizerSelector, DropzonePortuguese, DropzoneRussian, DropzoneSimplifiedChinese, DropzoneSpanish, DropzoneTraditionalChinese, FileItemEnglish, FileItemFrench, FileItemItalian, FileItemLocalizer, FileItemLocalizerSelector, FileItemPortuguese, FileItemRussian, FileItemSimplifiedChinese, FileItemSpanish, FileItemTraditionalChinese, ValidateErrorEnglish, ValidateErrorFrench, ValidateErrorItalian, ValidateErrorLocalizer, ValidateErrorLocalizerSelector, ValidateErrorPortuguese, ValidateErrorRussian, ValidateErrorSimplifiedChinese, ValidateErrorSpanish, ValidateErrorTraditionalChinese } from "./localization";
export { readAsArrayBuffer, readAsBinaryString, readAsDataURL, readAsText, resizeImage, getImageOrientation } from "./reader";
export { aac, abw, accdb, avi, azw, bmp, bz, bz2, cda, csh, css, csv, docx, drawio, eot, epub, freearc, gif, gzip, html, icalendar, jar, java, javascript, jpeg, json, jsonld, midi, mp3, mp4, mpeg, mpkg, octet, odp, ods, odt, oga, ogv, ogx, opus, otf, pdf, php, png, pptx, psd, python, rar, react, rtf, sass, sevenzip, sh, swf, tar, text, tiff, ttf, typescript, vsd, vue, wav, weba, webm, webp, wma, wmv, woff, xlsx, xml, xul, zip, applicationSelector, audioSelector, checkIsCode, extensionSelector, fontSelector, getURLFileIco, imageSelector, mimeSelector, textSelector, videoSelector, getURLFileIcoFromNameAndType, } from "./mime";
export type { ExtFile, Behaviour, ValidateFileResponse, ComponentLocalizer, ExtFileListMap, FileValidatorProps, FunctionLabel, LocalLabels, Localization, Method, NamedColor, ServerResponse, UploadPromiseResponse, UploadResponse, UploadConfig, UPLOADSTATUS, IconsMap } from "./types";
export { ExtFileInstance, ExtFileManager, createUploadConfig } from "./types";
export { extFileMock } from "./mocks";
export { uploadExtFile, FuiUpload, completeUploadResult, instantPreparingToUploadOne, preparingToUploadOne, sleepTransition, toUploadableExtFileList, unableToUploadResult, makeServerResponse, uploadFile, uploadFormData, ABORTED_ERROR_RESPONSE, JSON_PARSE_ERROR_RESPONSE, JsonParseResponse, NO_XHR_PROVIDED_ERROR, TIMEOUT_ERROR_RESPONSE, UNEXPECTED_ERROR_RESPONSE, makeErrorUploadResponse, makeSuccessUploadResponse, addExtraData, addHeaders, sanitizeArrExtFile, unexpectedErrorUploadResult, setNextUploadStatus } from "./upload";
export { FileIdGenerator, fileListToExtFileArray, fileListToExtFileInstanceArray, fileSizeFormater, getExt, isValidateActive, shrinkWord, fakeFuiUpload, prepToUploadOne, setPrepToUploading, sleepPreparing, uploadOne, uploadOneExtFile, cleanInput, addClassName, getRandomInt, isUploadAbleExtFile, getLocalFileItemData } from "./utils";
export { fileListvalidator, separateAccept, validateAccept, validateExtFile, validateExtFileList, validateFile } from "./validation";
export { asureColor, brighterColor, colourNameToHex, darkerColor, hexColorToRGB, hexTodec, isHexColor, NAMED_COLORS, completeAsureColor } from "./color";
export { SyntheticFile, createListOfMultiTypeFile, createSyntheticFile, makeSyntheticExtFile } from "./synthetic-file";
export { extFileReconcilation } from "./file-manager";