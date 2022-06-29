/*
 * Copyright (c) 2022, dotcms.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {useContext} from 'react'
import {EMAContext} from '../contexts'

/**
 * Custom React hook to get the if the site is in "EMA" mode.
 * @returns {{isEMA: boolean}}
 */
export const useEma = () => useContext(EMAContext)
