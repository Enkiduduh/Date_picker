// index.d.ts
declare module 'my-date-picker-package' {
  import { ChangeEventHandler } from 'react';

  export interface DatePickerProps {
    id: string;
    labelName: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }

  const DatePicker: React.FC<DatePickerProps>;
  export default DatePicker;
}
