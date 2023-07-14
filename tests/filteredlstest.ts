import fs from 'fs';
import { readDirectory } from '../5/filtered-lsts';

jest.mock('fs');

describe('filteredls', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    let readPathCallback: any;

    test('Debe listar los archivos con el mismo modulo', () => {
        const mockDirectory = 'directory';
        const mockExtension = 'txt';
        const consoleSpy = jest.spyOn(console, 'log');
        const mockfileList = ['file1.txt', 'file2.txt', 'file3.jpg', 'file4.txt'];
        jest.spyOn(fs, 'readdir').mockImplementation((path, callback) => {
            readPathCallback = callback;
        });

        readDirectory(mockDirectory, mockExtension);
        readPathCallback(null, mockfileList);

        expect(fs.readdir).toHaveBeenCalledWith(mockDirectory, expect.any(Function));
        expect(consoleSpy).toHaveBeenCalledWith('file1.txt');
        expect(consoleSpy).toHaveBeenCalledWith('file2.txt');
        expect(consoleSpy).toHaveBeenCalledWith('file4.txt');
        expect(consoleSpy).toHaveBeenCalledTimes(3);
    });
});