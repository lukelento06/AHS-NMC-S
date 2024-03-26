const { get } = require('http');
const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues,
    appendSpreadSheetValues
  } = require('./modules/googleSheetsService.js');
  
  const spreadsheetId = process.argv[2];
  const sheetName = process.argv[3];
  
  async function testGetSpreadSheet() {
    try {
      const auth = await getAuthToken();
      const response = await getSpreadSheet({
        spreadsheetId,
        auth
      })
      console.log('output for getSpreadSheet', JSON.stringify(response.data, null, 2));
    } catch(error) {
      console.log(error.message, error.stack);
    }
  }
  
  async function testGetSpreadSheetValues() {
    try {
      const auth = await getAuthToken();
      const response = await getSpreadSheetValues({
        spreadsheetId,
        sheetName,
        auth
      })
      console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
      console.log(error.message, error.stack);
    }
  }

  async function testAppendSpreadSheetValues () {
    try {
        const auth = await getAuthToken();
        console.log(sheetName)
        const range = 'Sheet1!A2'
        const values = [
            ["1", "FIRST", "LAST", "000000", "3/26/24"]
        ];
        const response = await appendSpreadSheetValues({
            spreadsheetId,
            auth,
            range,
            values
          });
          console.log('Output for appendSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
        console.log(error.message, error.stack)
    }
  }

  function main() {
    console.log("Appending values to Google Sheets...");
    testAppendSpreadSheetValues();
  }
  
  main()