import {fileReader} from '../3/my-first-iots';
import fs from 'fs';

jest.mock('fs');

describe('fileReaderSync', () => {
    test('debe devolver la cantidad de lineas que existen en el fichero', () => {
    const mockFileContent = 'Line 1\nLine 2\nLine 3\nLine 4\n';
    const filePath = 'file.txt';
    const readFileSyncMock = jest.spyOn(fs, 'readFileSync')
                                .mockReturnValueOnce(Buffer.from(mockFileContent));

    const consoleSpy = jest.spyOn(console, 'log');

    fileReader(filePath);

    expect(readFileSyncMock).toHaveBeenCalledWith(filePath);
    expect(consoleSpy).toHaveBeenCalledWith(4);
    });
});
