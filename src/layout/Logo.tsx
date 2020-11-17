import * as React from 'react';
import { SVGProps } from 'react';
import { useTheme } from '@material-ui/core/styles';

const Logo = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
       <div>绘本借阅系统</div>
    );
};

export default Logo;
