/*
 * Copyright (c) 2020 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */

import { Marfeel } from '@marfeel/analytics-providers-environment';
import { Configuration } from './types';

export * from './types';

export default class Blueconic {
	$initialized: Promise<void>;

	constructor( { touchVars }: Configuration, environment: Marfeel) {
		this.$initialized = environment.scripts.installScript(touchVars?.scriptSrc as string, 'mrf-blueconic', {});
	}

	async pageview(config: Configuration, marfeel: Marfeel): Promise<void> {
		await this.$initialized;

		return Promise.resolve();
	}

}
