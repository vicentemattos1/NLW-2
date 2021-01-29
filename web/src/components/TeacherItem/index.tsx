import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://instagram.ffor17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130478507_3792064044161587_5374817663803149335_n.jpg?_nc_ht=instagram.ffor17-1.fna.fbcdn.net&_nc_ohc=v_tnHrd5QHAAX-0PfEY&tp=1&oh=b1a47a0ed3f6d096e992acd5917b7393&oe=603D1BF3" alt="Vicente Mattos"/>
                <div>
                    <strong>Vicente Mattos</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                TESTEEEEEEEEEEEEEEEEEE
                <br/>
                <br/>
                TESTEEEEEEEEEEEEE
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>

            </footer>
        </article>

    )
}

export default TeacherItem