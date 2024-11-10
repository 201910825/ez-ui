'use client'


import { PanelsTopLeft } from 'lucide-react';
import {
  GanttChartProvider,GanttChartBody , GanttChartFooter ,GanttChartHeader,
  Btn, LinkContent, ScrollArea, PrevBtn, NextBtn, ConfirmProvider, useConfirm,
  ToggleDark,VirtualPhone,Avatar,
  Modal, ModalTrigger, ModalContent, ModalHeader, ModalFooter, ModalCancel, ModalAction,
  ThemeProvider
} from '@easymean/ez-ui';
import Sub from './sub/page';



const tasks = [
  { name: 'Task 1', plannedStart: new Date('2023-10-01'), plannedEnd: new Date('2023-10-05'), actualStart: new Date('2023-10-02'), actualEnd: new Date('2023-10-06') },
  { name: 'Task 2', plannedStart: new Date('2023-10-03'), plannedEnd: new Date('2023-10-08'), actualStart: new Date('2023-10-04'), actualEnd: new Date('2023-10-09') },
  { name: 'Task 3', plannedStart: new Date('2023-11-07'), plannedEnd: new Date('2024-11-10'), actualStart: new Date('2023-10-08'), actualEnd: new Date('2023-10-24') },
  ];

const HomeContent = () => {

  return (
    <ThemeProvider>
      ConfirmProvider
    <div className="">
      <ToggleDark />
      <Btn  className=''>click</Btn>
      <div className='w-1/2 flex justify-center'>
        <VirtualPhone width={200} height={500} src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80' alt='awef' speed={7} isSpin = {true}/>
        모바일
      </div>
      <Sub></Sub>
      <Avatar src="https://cdn.pixabay.com/photo/2022/06/23/17/13/ball-7280265_1280.jpg" alt="User Name" size="large" />
      <Modal>
        <ModalTrigger>
          <Btn className=''>awef</Btn>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <h2>Modal Title</h2>
          </ModalHeader>
          <p>Modal content goes here...</p>
          <ModalFooter>
            <ModalCancel className='bg-white'>Cancel</ModalCancel>
            <ModalAction>Confirm</ModalAction>
          </ModalFooter>
        </ModalContent>
      </Modal>
 
    </div>
    </ThemeProvider>
  );
};

export default function Home() {
  return (
    <ConfirmProvider alertTitle='뭐시깽이' confirmTitle='aweawef' alertClassName='bg-white' >

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
    <ScrollArea className="border-none flex justify-center  w-full" showScrollbar = {true} barColor='blue'>
      <Btn size="default" variant="default" className="dark:bg-blue-700">
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
    </ScrollArea>
    <div>
      
      {/* 페이지의 나머지 내용 */}
    </div>
      <LinkContent Icon={PanelsTopLeft} to='/infinitytest'>
        <p>무한 스크롤</p>
      </LinkContent>
    </ConfirmProvider>
  );
}