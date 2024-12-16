import fs from 'fs';

// Function to create a simple ZIP file
function createSimpleZip(fileName, outputZip) {
    const fileData = fs.readFileSync(fileName);
    const fileNameInZip = 'data.min.json';

    // Local file header
    const localFileHeader = Buffer.concat([
        Buffer.from([0x50, 0x4b, 0x03, 0x04]), // Local file header signature
        Buffer.from([0x14, 0x00]), // Version needed to extract
        Buffer.from([0x00, 0x00]), // General purpose bit flag
        Buffer.from([0x00, 0x00]), // Compression method (0 = no compression)
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Last mod file time and date
        Buffer.from([fileNameInZip.length & 0xff, (fileNameInZip.length >> 8) & 0xff]), // File name length
        Buffer.from([0x00, 0x00]), // Extra field length
        Buffer.from(fileNameInZip) // File name
    ]);

    // Data descriptor (not used here, but included for completeness)
    const dataDescriptor = Buffer.concat([
        Buffer.from([0x50, 0x4b, 0x07, 0x08]), // Data descriptor signature
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // CRC-32 (placeholder)
        Buffer.from([fileData.length & 0xff, (fileData.length >> 8) & 0xff, (fileData.length >> 16) & 0xff, (fileData.length >> 24) & 0xff]), // Compressed size
        Buffer.from([fileData.length & 0xff, (fileData.length >> 8) & 0xff, (fileData.length >> 16) & 0xff, (fileData.length >> 24) & 0xff]) // Uncompressed size
    ]);

    // Central directory file header
    const centralDirectoryHeader = Buffer.concat([
        Buffer.from([0x50, 0x4b, 0x01, 0x02]), // Central directory file header signature
        Buffer.from([0x14, 0x00]), // Version made by
        Buffer.from([0x14, 0x00]), // Version needed to extract
        Buffer.from([0x00, 0x00]), // General purpose bit flag
        Buffer.from([0x00, 0x00]), // Compression method
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Last mod file time and date
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // CRC-32 (placeholder)
        Buffer.from([fileData.length & 0xff, (fileData.length >> 8) & 0xff, (fileData.length >> 16) & 0xff, (fileData.length >> 24) & 0xff]), // Compressed size
        Buffer.from([fileData.length & 0xff, (fileData.length >> 8) & 0xff, (fileData.length >> 16) & 0xff, (fileData.length >> 24) & 0xff]), // Uncompressed size
        Buffer.from([fileNameInZip.length & 0xff, (fileNameInZip.length >> 8) & 0xff]), // File name length
        Buffer.from([0x00, 0x00]), // Extra field length
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Disk number start
        Buffer.from([0x00, 0x00]), // Internal file attributes
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // External file attributes
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Relative offset of local header
        Buffer.from(fileNameInZip) // File name
    ]);

    // End of central directory record
    const endOfCentralDirectory = Buffer.concat([
        Buffer.from([0x50, 0x4b, 0x05, 0x06]), // End of central directory signature
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Number of this disk
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Disk where central directory starts
        Buffer.from([0x01, 0x00]), // Number of central directory records on this disk
        Buffer.from([0x01, 0x00]), // Total number of central directory records
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Size of central directory (placeholder)
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // Offset of start of central directory with respect to the starting disk number
        Buffer.from([0x00, 0x00]) // .ZIP file comment length
    ]);

    // Write to the output ZIP file
    const zipBuffer = Buffer.concat([
        localFileHeader,
        fileData,
        dataDescriptor,
        centralDirectoryHeader,
        endOfCentralDirectory
    ]);

    fs.writeFileSync(outputZip, zipBuffer);
}

// Usage
createSimpleZip('data.min.json', 'output.zip');