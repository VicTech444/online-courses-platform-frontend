import { FC } from 'react';
import defaultImage from '../../public/defaultImg.webp';
import Image from "next/image";

interface Props {
    className?: string;
    height: number;
    width: number;
}

export const RobotImg: FC<Props> = ({className, height, width}) => {
    return (
        <>
        <Image alt='Default image for the website' src={defaultImage} className={`object-cover ${className}`} height={height} width={width} priority/>
        </>
    )
}