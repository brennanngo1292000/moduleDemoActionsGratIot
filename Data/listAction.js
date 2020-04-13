export default [
    {
      command: 'POWER',
      action: 'power',
      control: 1,
      listen: 1,
      name: 'Tắt/bật',
      value_type: 'default',
      values: [
        {control: 1, listen: 1, name: 'Bật', value: 'ON'},
        {value: 'OFF', name: 'Tắt', control: 1, listen: 1},
        {value: 'SWITCH', name: 'Đảo ngược', control: 1, listen: 0},
      ],
    },
    {
      action: 'color',
      command: 'COLOR',
      control: 0,
      listen: 1,
      name: 'Màu',
      value_type: 'input',
    },
    {
      action: 'temperature',
      command: 'temperature',
      control: 0,
      listen: 1,
      name: 'Nhiệt độ',
      value_type: 'input',
    },
    {
      action: 'humidity',
      command: 'humidity',
      control: 0,
      listen: 1,
      name: 'Độ ẩm',
      value_type: 'input',
    },
  
    {
      action: 'GOOGLE_VOICE',
      command: 'google_voice',
      control: 1,
      listen: 0,
      name: 'Giọng nói',
      value_type: 'input',
    },
  ];
  