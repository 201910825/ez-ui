'use client'
import React from 'react';
import { Btn } from "../components/Button";
import ToggleDark from '../components/Darkmode';
import Alert from '../components/Alert';
import VirtualPhone from '../components/VirtualPhone';
import Avatar from '../components/Avatar';
import Form from '../components/Form';
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalFooter, ModalCancel, ModalAction } from '../components/Modal';
import { ConfirmProvider, useConfirm } from '../components/Confirm';
import { GanttChartHeader, GanttChartBody ,GanttChartFooter , GanttChartProvider, NextBtn, PrevBtn } from '../components/gantt';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import  LinkContent  from '../components/LinkItem';
import { PanelsTopLeft } from 'lucide-react';
import ScrollArea from '../components/ScrollArea';
import  Calendar  from '../components/Calendar';

const tasks = [
  { name: 'Task 1', plannedStart: new Date('2023-10-01'), plannedEnd: new Date('2023-10-05'), actualStart: new Date('2023-10-02'), actualEnd: new Date('2023-10-06') },
  { name: 'Task 2', plannedStart: new Date('2023-10-03'), plannedEnd: new Date('2023-10-08'), actualStart: new Date('2023-10-04'), actualEnd: new Date('2023-10-09') },
  { name: 'Task 3', plannedStart: new Date('2023-11-07'), plannedEnd: new Date('2024-11-10'), actualStart: new Date('2023-10-08'), actualEnd: new Date('2023-10-24') },
  ];
  const navItems = [
    { label: '홈', href: '/' },
    { label: '소개', href: '/about' },
    { label: '서비스', href: '/services' },
    { label: '연락처', href: '/contact' },
  ];

const HomeContent = () => {
  const { confirm } = useConfirm();
  const handleDelete = async () => {
    console.log('clicked');
    const result = await confirm('Are you sure you want to delete this item?');
    if (result) {
      console.log("Confirmed");
    } else {
      console.log("Cancelled");
    }
  };

  return (
    <div className="">
      <ToggleDark />
      <Btn  className=''>click</Btn>
      <Alert title='' content='content'></Alert>
      <div className='w-1/2 flex justify-center'>
        <VirtualPhone width={200} height={700} src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80' alt='awef' speed={7} isSpin = {false}/>
        모바일
      </div>
      
      <Avatar src="https://cdn.pixabay.com/photo/2022/06/23/17/13/ball-7280265_1280.jpg" alt="User Name" size="large" />
      <Form title='Login'/>
      <button onClick={handleDelete}>Delete Item</button>
      <Modal>
        <ModalTrigger>
          <Btn size="large" variant="primary">awef</Btn>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <h2>Modal Title</h2>
          </ModalHeader>
          <p>Modal content goes here...</p>
          <ModalFooter>
            <ModalCancel>Cancel</ModalCancel>
            <ModalAction>Confirm</ModalAction>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default function Home() {
  return (
    <ConfirmProvider >
      <NavBar 
        items={navItems} 
        logo={<Image src="" alt="Logo" width={40} height={40} />}
        className="bg-gray-100"
      />
      <HomeContent />
      <div>
      <h1>Gantt Chart</h1>
      <GanttChartProvider width={700} height={400} tasks={tasks} plannedColor="orange" actualColor="blue">
        <GanttChartHeader/>
        <GanttChartBody/>
        <GanttChartFooter >
          <PrevBtn>prev</PrevBtn>
          <NextBtn>next</NextBtn>
        </GanttChartFooter >
      </GanttChartProvider>
    </div>
    <div>
      <Btn size="default" variant="default" className="custom-class">
        Default Button
      </Btn>
      <Btn size="small" variant="primary" className="custom-class">
        Small Primary Button
      </Btn>
      <Btn size="medium" variant="secondary" className="custom-class">
        Medium Secondary Button
      </Btn>
      <Btn size="large" variant="danger" className="custom-class">
        Large Danger Button
      </Btn>
      <Btn size="large" className="bg-red-400">
        Custom Large Red Button
      </Btn>
    </div>
    <div>
      
      {/* 페이지의 나머지 내용 */}
    </div>
      <LinkContent Icon={PanelsTopLeft} to='/infinitytest'>
        <p>무한 스크롤</p>
      </LinkContent>
      <ScrollArea className="h-[250px] w-[300px]" showScrollbar = {true} barColor='blue'>
        <LinkContent className='w-full' Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        <LinkContent Icon={PanelsTopLeft} to='/'>
          <p>컨텐츠 경로</p>
        </LinkContent>
        
    </ScrollArea><Calendar/>
    </ConfirmProvider>
  );
}