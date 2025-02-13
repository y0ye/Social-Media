import { useDisclosure } from '@mantine/hooks';
import classes from '../App.module.css'
import { useState } from 'react';
import {
  IconFlame,
  IconDatabaseImport,
  IconLock,
  IconLogout,
  IconSettings,
} from '@tabler/icons-react';
import { Drawer, Button, DrawerTitle, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, CloseButton, ActionIcon } from '@mantine/core';

export const dataOptions = [
  { link: '', label: 'Home', icon: IconFlame },
  { link: '', label: 'Security', icon: IconLock },
  { link: '', label: 'Upload Images', icon: IconDatabaseImport },
  { link: '', label: 'Settings', icon: IconSettings },
  { link: '', label: 'Logout', icon: IconLogout },
];


export default function SideBar() {
    const [active, setActive] = useState('Billing');
  
  const [opened, { open, close }] = useDisclosure(false);

  const options = dataOptions.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        styles= {{
          root:{
            position:'fixed',
            height:'fit-content',
            left: 0,
            zIndex:1000,
          },
          content: {
            backgroundColor:'bisque',
            display:'flex',
            flexDirection:'column',

          },
          title:{
            marginTop:'5rem',
            marginLeft:0,
            textAlign:'center'
          },
          body:{
            display:'flex',
            flexDirection:'column',
            gap:'1rem',
          },
          close: {
          }
        }}
      >
        <DrawerContent>
          <DrawerTitle>Cat Posting</DrawerTitle>
          <DrawerBody>{options}</DrawerBody>
        </DrawerContent>
      </Drawer>

      <Button className={classes.menuButton} variant="default" onClick={open}>
        ☰
      </Button>
    </>
  );
}