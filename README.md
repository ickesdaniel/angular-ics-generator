# Angular .ics Generator

A simple library to create and download a basic .ics file from an Angular application.

## Installing 

`npm install angular-ics-generator`

## Using

Import the generator service:

`import { AngularIcsGeneratorService } from 'angular-ics-generator';`

Then call it like this:

```
const startDate = new Date();
const endDate = new Date();
this._icsService.DownloadIcs(startDate,
                endDate,
                'my event title',
                'my event description',
                `url`,
                'location',
                'My organization', // organisation is optional
                'EN', // locale is optional. EN will be used if no locale is provided
                '15'); // Optional value for minutes to set reminder. Will have no automatic reminder if not provided.
```

This will generate and download the .ics file. All the user will need to do is open the file and save the event in any calendar app supporting this format

## License

MIT