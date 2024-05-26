
import { Container, CssBaseline, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { TextEditor } from 'mui-tiptap-editor';

const tabs = [
  'Simple',
];


const App = () => {
  const [tab, setTab] = useState<number>(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <div>
      <CssBaseline />
      <Container>
        {/* tabs */}
        <Tabs value={tab} onChange={handleChange} aria-label="tabs"sx={{ mb: 2 }}>
          {tabs.map((label, index) => (
            <Tab key={index} label={label} value={index} />
          ))}
        </Tabs>
        {/* ------ tabs panel ------ */}
        {/* Simple input */}
        {tab === 0 && <TextEditor placeholder='Type something here...' />}

      </Container>
    </div>
  )
}

export default App
