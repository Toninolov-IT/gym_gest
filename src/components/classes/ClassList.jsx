import { useSelector, useDispatch } from 'react-redux';
import { selectClasses, fetchClasses } from '../../store/classSilce';
import { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import { Grid } from '@mui/system';
function ClassList() {
    const dispatch = useDispatch();

    const classes = useSelector(selectClasses).classes;
    const classStatus = useSelector(selectClasses).status;

    useEffect(() => {
        if (classStatus == 'init') {
            dispatch(fetchClasses());
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="classes-container">
                {
                    classes.length ?  
                    <div className="classes-list">
                    <Grid container spacing={3}>
                    {classes.map((cls, index) =>
                     <Grid size="grow">
                        <Card size={4}>
                            {
                            cls.type == 1 ?  
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="public/openImage.png"
                                    title="green iguana"
                                /> 
                            : cls.type == 2 ?
                                <CardMedia
                                sx={{ height: 140 }}
                                image="public/classImage.png"
                                title="green iguana"
                                /> 
                            : null}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {cls.type == 1 ? "Open Box" : cls.type == 2 ? "Cross Class" : null}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {cls.time}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Iscriviti</Button>
                        </CardActions>
                        </Card>
                      </Grid>
                    )}
                    </Grid>
                    </div> 
                    : classStatus == 'loading' ? <CircularProgress /> :
                    <div className="books-list">
                        <h5>Classes not found!</h5>
                    </div>
                }
                </div>
            </div>
        </>
    )
}

export default ClassList