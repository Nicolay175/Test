import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cote from '../../img/Cote.jpg'

const About = () => {
    return (
        <Box className='box_text' sx={{backgroundColor: 'secondary.main'}}>
            <Typography variant={"h5"} align='center'>Это усе о нас</Typography>
            <img width="400" height="500" className='cote' alt="Коте" src={Cote}/>
                <Typography>Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании дальнейших направлений развития. Не следует, однако забывать, что сложившаяся структура организации в значительной степени обуславливает создание направлений прогрессивного развития. Задача организации, в особенности же новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.            </Typography>

                <Typography>Товарищи! сложившаяся структура организации позволяет выполнять важные задания по разработке систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации систем массового участия.</Typography>

                <Typography>Задача организации, в особенности же консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Товарищи! начало повседневной работы по формированию позиции позволяет оценить значение направлений прогрессивного развития. Задача организации, в особенности же сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.</Typography>

                <Typography>Товарищи! сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт сложившаяся структура организации играет важную роль в формировании форм развития. Равным образом укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.</Typography>

                <Typography>Повседневная практика показывает, что консультация с широким активом требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также рамки и место обучения кадров в значительной степени обуславливает создание существенных финансовых и административных условий.</Typography>

                <Typography>Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации дальнейших направлений развития. Товарищи! рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач. С другой стороны начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений.</Typography>

        </Box>
    );
};

export default About;