import { Col, Row, Progress, Divider } from 'antd';
import React from 'react';
import './styles.css';
import Auth from '../../auth';

const auth = new Auth();

const HeaderSystem = () => {

    return (
        <>
        {auth.isAuthenticated() 
        ?
        <Row gutter={[16, 16]}>
            <Col span={2}>
                <Progress 
                    type="circle" 
                    percent={10} 
                    size={'small'}
                    width={90} />
            </Col>
            <Col span={4}>
                <div className="nomeUsuario">Nome do usuário</div>
                <div className="nomeEmpresa">Nome da empresa</div>
                <div className="rank">Rank - #1</div>
                <Divider dashed />
                <div className="conquista">Consquista 01</div>
                
                <div className="imagemOuro"> <span className="numeroUm"> 1 |</span> </div>
                <div className="imagemPrata"> <span className="numeroUm">2 |</span> </div>
                <div className="imagemBronze"> <span className="numeroUm">3 |</span> </div>
                
            </Col>
            <Col span={1}>
                <div className="nomeSistema">Consilio</div>
            </Col>
            <Col>
                <div className="logo"></div>
            </Col>
        </Row>
        :
        <Row>
            <Col span={3}>
                <div className="nomeLogoSistema">Consilio</div>
            </Col>
        </Row>
        }
        </>
    );
}

export default HeaderSystem;