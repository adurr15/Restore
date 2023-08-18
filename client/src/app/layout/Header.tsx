import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props{
    darkMode: boolean;
    change: () => void;
}


export default function Header({darkMode, change}: Props){
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={change} />
            </Toolbar>
        </AppBar>
    )
}