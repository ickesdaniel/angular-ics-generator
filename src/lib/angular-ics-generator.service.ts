import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularIcsGeneratorService {

  constructor() { }
  // tslint:disable-next-line: max-line-length
  public downloadIcs(start: Date, end: Date, title: string, description: string, url: string, location: string, organization?: string, locale?: string, reminderMinutes?: string) {
    const startDate = start.toISOString().replace('-', '').replace(':', '').split('.')[0];
    const endDate = end.toISOString().replace('-', '').replace(':', '').split('.')[0];
    const ics = this.generateIcs(startDate, endDate, title, description, url, location, organization || 'default', locale || 'EN', reminderMinutes);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ics));
    element.setAttribute('download', `${title}.ics`);
    element.setAttribute('target', '_blank');
    element.style.display = 'none';
    element.click();
  }

  // tslint:disable-next-line: max-line-length
  private generateIcs(start: string, end: string, title: string, description: string, url: string, location: string, organization: string, locale: string, reminderMinutes?: string) {
    const timeStamp = new Date().toISOString();
    const uuid = `${timeStamp}-uid@${organization}`;

    // Don't ever format this string template
    const event = `BEGIN:VCALENDAR
PRODID:-//Events Calendar//${organization} 1.0//${locale}
VERSION:2.0
BEGIN:VEVENT
DTSTAMP:${timeStamp}Z
DTSTART:${start}
DTEND:${end}
SUMMARY:${title}
DESCRIPTION:${description}${!!url ? (' URL: ' + url) : ''}
URL:${url}
LOCATION:${location}
UID:${uuid}
${!!reminderMinutes ? `BEGIN:VALARM
TRIGGER:-PT${reminderMinutes}M
REPEAT:1
DURATION:PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM` : ''}
END:VEVENT
END:VCALENDAR`;
    return event;
  }
}
