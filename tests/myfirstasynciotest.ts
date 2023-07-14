import fs, {PathLike} from 'fs';
import { readFileAsync } from '../4/my-first-async-iots';

jest.mock('fs');
describe('fileReaderAsync', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('Lee el numero de lineas que hay en el archivo', () => {
        const mockFileContent = 'Line 1\nLine 2\nLine 3\nLine 4\n';
        const filePath = 'file.txt';
        const consoleSpy = jest.spyOn(console, 'log');
        let readFileCallback: any;
        // @ts-ignore
        jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
            readFileCallback = callback;
        });

        readFileAsync(filePath);

        readFileCallback(null, mockFileContent);
        expect(fs.readFile).toBeCalledWith('file.txt', 'utf-8', readFileCallback);
        expect(consoleSpy).toHaveBeenCalledWith(4);
    });
});
