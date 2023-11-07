import csv from 'csv-parser';
import * as fs from 'fs';

type DataItem = {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
};

const csvParser = async (filePath: string): Promise<DataItem[]> => {
  return new Promise<DataItem[]>((resolve, reject) => {
    const data: DataItem[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        Object.keys(row).forEach((key) => {
          if (typeof row[key] === 'string') {
            row[key] = row[key].trim();
          }
        });

        data.push(row);
      })
      .on('end', () => resolve(data))
      .on('error', (error) => reject(error));
  });
};

export default csvParser;
