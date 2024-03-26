const { MultiFormatReader, BarcodeFormat } = require('@zxing/library');

const hints = new Map();
const formats = [BarcodeFormat.QR_CODE, BarcodeFormat.DATA_MATRIX/*, ...*/];

hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

const reader = new MultiFormatReader();

const luminanceSource = new RGBLuminanceSource(imgByteArray, imgWidth, imgHeight);
const binaryBitmap = new BinaryBitmap(new HybridBinarizer(luminanceSource));

reader.decode(binaryBitmap, hints);