/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,6.31a1,1,0,0,0,1-1V1.91a1,1,0,0,0-2,0v3.4A1,1,0,0,0,18,6.31Z"/><path d="M18,29.69a1,1,0,0,0-1,1v3.4a1,1,0,0,0,2,0v-3.4A1,1,0,0,0,18,29.69Z"/><path d="M8.32,9.74A1,1,0,0,0,9,10a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L7.33,5.92A1,1,0,0,0,5.92,7.33Z"/><path d="M27.68,26.26a1,1,0,1,0-1.42,1.42l2.41,2.4a1,1,0,0,0,.71.3,1,1,0,0,0,.7-.3,1,1,0,0,0,0-1.41Z"/><path d="M6.31,18a1,1,0,0,0-1-1H1.91a1,1,0,0,0,0,2h3.4A1,1,0,0,0,6.31,18Z"/><path d="M34.09,17h-3.4a1,1,0,1,0,0,2h3.4a1,1,0,0,0,0-2Z"/><path d="M8.32,26.26l-2.4,2.41a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3l2.41-2.4a1,1,0,1,0-1.42-1.42Z"/><path d="M27,10a1,1,0,0,0,.71-.29l2.4-2.41a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0l-2.41,2.4a1,1,0,0,0,0,1.42A1,1,0,0,0,27,10Z"/><path d="M18.13,7.75a10.13,10.13,0,1,0,10,10.13A10.08,10.08,0,0,0,18.13,7.75Zm0,18.25a8.13,8.13,0,1,1,8-8.12A8.08,8.08,0,0,1,18.13,26Z"/>',
  solid:
    '<path d="M18,6.42a1,1,0,0,0,1-1V1.91a1,1,0,0,0-2,0V5.42A1,1,0,0,0,18,6.42Z"/><path d="M18,29.58a1,1,0,0,0-1,1v3.51a1,1,0,0,0,2,0V30.58A1,1,0,0,0,18,29.58Z"/><path d="M8.4,9.81A1,1,0,0,0,9.81,8.4L7.33,5.92A1,1,0,0,0,5.92,7.33Z"/><path d="M27.6,26.19a1,1,0,0,0-1.41,1.41l2.48,2.48a1,1,0,0,0,1.41-1.41Z"/><path d="M6.42,18a1,1,0,0,0-1-1H1.91a1,1,0,0,0,0,2H5.42A1,1,0,0,0,6.42,18Z"/><path d="M34.09,17H30.58a1,1,0,0,0,0,2h3.51a1,1,0,0,0,0-2Z"/><path d="M8.4,26.19,5.92,28.67a1,1,0,0,0,1.41,1.41L9.81,27.6A1,1,0,0,0,8.4,26.19Z"/><path d="M27.6,9.81l2.48-2.48a1,1,0,0,0-1.41-1.41L26.19,8.4A1,1,0,0,0,27.6,9.81Z"/><circle cx="18" cy="18" r="10"/>',
};

export const sunIconName = 'sun';
export const sunIcon: IconShapeTuple = [sunIconName, renderIcon(icon)];
