/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25.18,12.32l-5.91,5.81a3,3,0,1,0,1.41,1.42l5.92-5.81Z"/><path d="M18,4.25A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35A16.49,16.49,0,0,0,18,4.25Zm11.34,25.5H6.66a14.43,14.43,0,0,1-3.11-7.84H7v-2H3.55A14.41,14.41,0,0,1,7,11.29l2.45,2.45,1.41-1.41L8.43,9.87A14.41,14.41,0,0,1,17,6.29v3.5h2V6.3a14.47,14.47,0,0,1,13.4,13.61H28.92v2h3.53A14.43,14.43,0,0,1,29.34,29.75Z"/>',

  outlineBadged:
    '<path d="M15.85,18.69a3,3,0,1,0,4.83.85l5.92-5.81-1.41-1.41-5.91,5.81A3,3,0,0,0,15.85,18.69Z"/><path d="M32.58,13a7.45,7.45,0,0,1-2.06.44,14.4,14.4,0,0,1,1.93,6.43H28.92v2h3.53a14.43,14.43,0,0,1-3.11,7.84H6.66a14.43,14.43,0,0,1-3.11-7.84H7v-2H3.55A14.41,14.41,0,0,1,7,11.29l2.45,2.45,1.41-1.41L8.43,9.87A14.41,14.41,0,0,1,17,6.29v3.5h2V6.3A14.41,14.41,0,0,1,22.58,7a7.52,7.52,0,0,1-.08-1,7.52,7.52,0,0,1,.09-1.09A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35a16.45,16.45,0,0,0,2-18.36Z"/>',

  solid:
    '<path d="M18,4.25A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35A16.49,16.49,0,0,0,18,4.25Zm8.6,9.48-5.92,5.81a3,3,0,1,1-1.41-1.42l5.91-5.81Zm-23,6.17H7v2H3.56c0-.39-.05-.77-.05-1.17S3.53,20.18,3.55,19.9Zm4.88-10,2.46,2.46L9.47,13.74,7,11.29A14.57,14.57,0,0,1,8.43,9.87ZM19,9.79H17V6.29c.32,0,.63,0,1,0s.7,0,1,.05ZM32.49,20.74c0,.39,0,.79-.05,1.17H28.92v-2h3.53C32.47,20.18,32.49,20.46,32.49,20.74Z"/>',

  solidBadged:
    '<path d="M32.58,13a7.46,7.46,0,0,1-10-8.12A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35a16.45,16.45,0,0,0,2-18.36ZM17,6.29c.32,0,.63,0,1,0s.7,0,1,.05v3.5H17ZM7,21.91H3.56c0-.39-.05-.77-.05-1.17s0-.56,0-.83H7Zm2.51-8.16L7,11.29A14.57,14.57,0,0,1,8.43,9.87l2.46,2.46Zm10.62,9.19a3,3,0,1,1-.82-4.81l5.91-5.81,1.41,1.41-5.92,5.81A3,3,0,0,1,20.09,22.93Zm12.35-1H28.92v-2h3.53c0,.28,0,.55,0,.83S32.47,21.52,32.44,21.91Z"/>',
};

export const dashboardIconName = 'dashboard';
export const dashboardIcon: IconShapeTuple = [dashboardIconName, renderIcon(icon)];
