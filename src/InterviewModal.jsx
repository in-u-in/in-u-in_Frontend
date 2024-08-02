

import React from 'react';
import { Modal, Typography, Form, Checkbox, Slider } from 'antd';

const InterviewModal = ({ modalOpened, handleOk, closeModagl }) => {
    return (
        <Modal
            open={modalOpened}
            onOk={handleOk}
            onCancel={closeModal}
            title="희망 인터뷰 조건 설정하기"
            okText="신청하기"
            cancelText="취소"
            style={{ width: 'calc(100% - 40px)', maxWidth: '600px' }}
        >
            <Typography.Text type="secondary">
                보다 편한 인터뷰를 위해 인터뷰에 대한 추가 정보를 입력해 주세요.
            </Typography.Text>
            <Form layout="vertical" style={{ marginTop: 30 }}>
                <Form.Item
                    label="원하는 인터뷰 방법"
                    name="method"
                    rules={[{ required: true, message: "인터뷰 방식은 필수 조건입니다." }]}
                >
                    <Checkbox.Group>
                        <Checkbox value={1}>대면</Checkbox>
                        <Checkbox value={2}>화상채팅</Checkbox>
                        <Checkbox value={3}>전화</Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item
                    label="희망 인터뷰 소요 시간"
                    name="time"
                    rules={[{ required: true, message: "인터뷰 소요 시간은 필수 조건입니다." }]}
                >
                    <Slider range defaultValue={[30, 60]} min={30} step={10} />
                </Form.Item>
                <Form.Item
                    label="추가시간 보상 단가"
                    name="reward"
                    rules={[{ required: true, message: "추가시간 보상 단가는 필수 조건입니다." }]}
                    tooltip="설정 인터뷰 시간을 초과한 경우 추가로 지급해 드리는 보상금의 범위입니다."
                >
                    <Slider range defaultValue={[1000, 2000]} min={1000} max={5000} step={1000} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default InterviewModal;