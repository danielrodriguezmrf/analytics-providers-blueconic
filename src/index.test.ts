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
import Blueconic, { Configuration } from '.';

describe('Provider', () => {
	let configuration: Configuration;
	let marfeel: Marfeel;

	beforeEach(() => {
		configuration = {
			vars: {
				config: ''
			},
			touchVars: {
				scriptSrc: 'https://x721.yourmoney.com/script.js',
			},
			triggers: {}
		};
		marfeel = {
			scripts: {
				installScript: jest.fn(() => Promise.resolve())
			}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} as any as Marfeel;
	});

	describe('constructor', () => {
		test('initializes blueconic script', () => {
			new Blueconic(configuration, marfeel);

			expect(marfeel.scripts.installScript).toHaveBeenCalledWith(
				'https://x721.yourmoney.com/script.js',
				'mrf-blueconic',
				{}
			);
		});
	});

	describe('pageview', () => {

	});
});
