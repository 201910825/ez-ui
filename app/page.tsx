'use client'
import React from 'react';
import Btn from "@/components/Button";
import ToggleDark from '@/components/Darkmode';
import Alert from '@/components/Alert';
import VirtualPhone from '@/components/VirtualPhone';
import Avatar from '@/components/Avatar';
import Form from '@/components/Form';
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalFooter, ModalCancel, ModalAction } from '@/components/Modal';
import { ConfirmProvider, useConfirm } from '@/components/Confirm';
import { GanttChartHeader, GanttChartBody ,GanttChartFooter , GanttChartProvider, NextBtn, PrevBtn } from '@/components/gantt';
import { cn } from '@/lib/utils';
const tasks = [
  { name: 'Task 1', plannedStart: new Date('2023-10-01'), plannedEnd: new Date('2023-10-05'), actualStart: new Date('2023-10-02'), actualEnd: new Date('2023-10-06') },
  { name: 'Task 2', plannedStart: new Date('2023-10-03'), plannedEnd: new Date('2023-10-08'), actualStart: new Date('2023-10-04'), actualEnd: new Date('2023-10-09') },
  { name: 'Task 3', plannedStart: new Date('2023-11-07'), plannedEnd: new Date('2024-11-10'), actualStart: new Date('2023-10-08'), actualEnd: new Date('2023-10-24') },
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
      <Btn>click</Btn>
      <Alert title='' content='content'></Alert>
      <VirtualPhone src='' alt='awef' speed={7}/>
      <Avatar src="" alt="User Name" size="large" />
      <Form title='Login'/>
      <button onClick={handleDelete}>Delete Item</button>
      <Modal>
        <ModalTrigger>
          <Btn>awef</Btn>
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
    <ConfirmProvider>
      <HomeContent />
      <div>
      <h1>Gantt Chart</h1>
      <GanttChartProvider width={1000} height={400} tasks={tasks} plannedColor="orange" actualColor="blue">
        <GanttChartHeader/>
        <GanttChartBody/>
        <GanttChartFooter >
          <PrevBtn>prev</PrevBtn>
          <NextBtn>next</NextBtn>
        </GanttChartFooter >
      </GanttChartProvider>
    </div>
    </ConfirmProvider>
  );
}