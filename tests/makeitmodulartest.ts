import fs from 'fs';
import { filtroModularExtensiones } from '../6/make-it-modularts';

jest.mock('fs');

describe('fileReader', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    let readPathCallback: any;

    test('Da una lista de los ficheros que tienen la extensión en el directorio', () => {
        const mockDirectory = 'directory';
        const mockExtension = 'txt';
        const consoleSpy = jest.spyOn(console, 'log');
        const mockfileList = ['file1.txt', 'file2.txt', 'file3.jpg', 'file4.txt'];
        jest.spyOn(fs, 'readdir').mockImplementation((path, callback) => {
            readPathCallback = callback;
        });

        filtroModularExtensiones(mockDirectory, mockExtension);
        readPathCallback(null, mockfileList);

        expect(fs.readdir).toHaveBeenCalledWith(mockDirectory, expect.any(Function));
        expect(consoleSpy).toHaveBeenCalledWith('file1.txt');
        expect(consoleSpy).toHaveBeenCalledWith('file2.txt');
        expect(consoleSpy).toHaveBeenCalledWith('file4.txt');
        expect(consoleSpy).toHaveBeenCalledTimes(3);
    });
});