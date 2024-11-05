'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import { Btn } from "@easymean/ez-ui";
import ToggleDark from '../components/Darkmode';
import VirtualPhone from '../components/VirtualPhone';
import Avatar from '../components/Avatar';
import Form from '../components/Form';
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalFooter, ModalCancel, ModalAction } from '../components/Modal';
import { ConfirmProvider, useConfirm } from '../components/Confirm';
import { GanttChartHeader, GanttChartBody, GanttChartFooter, GanttChartProvider, NextBtn, PrevBtn } from '../components/gantt';
import LinkContent from '../components/LinkItem';
import { PanelsTopLeft } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import { ScrollArea } from '../src';
var tasks = [
    { name: 'Task 1', plannedStart: new Date('2023-10-01'), plannedEnd: new Date('2023-10-05'), actualStart: new Date('2023-10-02'), actualEnd: new Date('2023-10-06') },
    { name: 'Task 2', plannedStart: new Date('2023-10-03'), plannedEnd: new Date('2023-10-08'), actualStart: new Date('2023-10-04'), actualEnd: new Date('2023-10-09') },
    { name: 'Task 3', plannedStart: new Date('2023-11-07'), plannedEnd: new Date('2024-11-10'), actualStart: new Date('2023-10-08'), actualEnd: new Date('2023-10-24') },
];
var HomeContent = function () {
    var _a = useConfirm(), confirm = _a.confirm, alert = _a.alert;
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('clicked');
                    return [4 /*yield*/, confirm('Are you sure you want to delete this item?')];
                case 1:
                    result = _a.sent();
                    if (result) {
                        alert('awefawef');
                        console.log("Confirmed");
                    }
                    else {
                        console.log("Cancelled");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className="">
      <ToggleDark />
      <Btn className=''>click</Btn>
      <div className='w-1/2 flex justify-center'>
        <VirtualPhone width={200} height={500} src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80' alt='awef' speed={7} isSpin={true}/>
        모바일
      </div>
      
      <Avatar src="https://cdn.pixabay.com/photo/2022/06/23/17/13/ball-7280265_1280.jpg" alt="User Name" size="large"/>
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
      <CodeBlock codeString={"import { Button } from \"@Components/ui/button\"\n\nexport default function Home() {\n  return (\n    <div>\n      <Button>Click me</Button>\n    </div>\n  )\n}"} language="typescript"/>
    </div>);
};
export default function Home() {
    return (<ConfirmProvider alertTitle='뭐시깽이'>

      <HomeContent />
      <div>
      <h1>Gantt Chart</h1>
      <GanttChartProvider width={700} height={400} tasks={tasks} plannedColor="orange" actualColor="blue">
        <GanttChartHeader />
        <GanttChartBody />
        <GanttChartFooter>
          <PrevBtn>prev</PrevBtn>
          <NextBtn>next</NextBtn>
        </GanttChartFooter>
      </GanttChartProvider>
    </div>
    <ScrollArea className="border-none flex justify-center  w-full" showScrollbar={true} barColor='blue'>
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
    </ScrollArea>
    <div>
      
      {/* 페이지의 나머지 내용 */}
    </div>
      <LinkContent Icon={PanelsTopLeft} to='/infinitytest'>
        <p>무한 스크롤</p>
      </LinkContent>
    </ConfirmProvider>);
}
