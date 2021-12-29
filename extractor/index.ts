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

import { Configuration } from '../src';

const SRC = 'x721';

export default class Extractor {
	static onRequest(url: string, page: any): Promise<Partial<Configuration>[]> {
		const uri = new URL(url);

		return this.matches(uri.host) ? Promise.resolve([this.extract(uri.href)]) : Promise.resolve([]);
	}

	private static matches(url: string): boolean {

		return url.includes(SRC);

	}

	private static extract(url: string): Configuration {
		return {
			vars: {
				config: ''
			},
			touchVars: {
				scriptSrc: url
			},
			triggers: {
				__extends: 'marfeel/index/resources/analytics/triggers/default/pageview.json'
			}
		}
	}
}
