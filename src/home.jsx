import React from 'react';
import './styles/home.css';


export default function home() {
  
    return (
        <div>
            <div className="background1">
                <div className="title_page1">
                    <h1>정성적 인터뷰 매칭을<br />
                    보다 쉽고<br />
                    간편하게</h1>
                </div>
                <div className="subtitle_page1">
                    <h3>당신의 꿈을 향해 끝까지 함께할 IN U IN</h3>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="이메일 주소를 입력하세요" />
                    <button type="button">무료 체험 시작하기</button>
                </div>
            </div>
            <div className="background2">
                <div className="description1_page2">
                    <h1>IN U IN이 제공하는 최고의 인터뷰 솔루션을 통해<br />
                    내 손안의 인터뷰 관리를 경험 해보세요.</h1>
                </div>
                <div className="description2_page2">
                    <h3>정성적 인터뷰 참여자 모집</h3>
                </div>
                <div className="description3_page2">
                    <h3>정성적 인터뷰에 참여할<br />
                    인터뷰 희망자를 보다 쉽게</h3>
                </div>
                <div className="interview-button">
                    <button type="button">인터뷰 생성하기</button>
                </div>
            </div>
        </div>
    );
}
  