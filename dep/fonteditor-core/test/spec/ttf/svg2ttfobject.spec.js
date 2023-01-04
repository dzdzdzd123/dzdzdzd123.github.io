/**
 * @file svg2ttfobject
 * @author mengke01(kekee000@gmail.com)
 */
import assert from 'assert';
import {readData} from '../data';
import svg2ttfobject from 'fonteditor-core/ttf/svg2ttfobject';

describe('svg转ttf对象', function () {

    let ttfObject = svg2ttfobject(readData('iconfont-xin.svg'));

    it('test svg glyf', function () {
        assert.equal(ttfObject.from, 'svg');
        assert.equal(ttfObject.glyf.length, 2);
        assert.equal(ttfObject.glyf[0].contours.length, 7);
        assert.equal(ttfObject.glyf[1].contours.length, 1);
    });

    let fontObject = svg2ttfobject(readData('icomoon.svg'));

    it('test svg font', function () {
        assert.equal(fontObject.from, 'svgfont');
        assert.equal(fontObject.id, 'icomoon');
        assert.equal(fontObject.name.fontFamily, 'icomoon');
        assert.equal(fontObject.metadata, 'Generated by IcoMoon');
    });

    it('test svg font glyf', function () {
        assert.equal(fontObject.glyf.length, 3);
        assert.equal(fontObject.glyf[2].leftSideBearing, 0);
        assert.equal(fontObject.glyf[2].advanceWidth, 1024);
        assert.equal(fontObject.glyf[2].contours.length, 7);
        assert.equal(fontObject.glyf[2].unicode[0], 57345);
    });

    let hucpTtf = svg2ttfobject(readData('high-unicode-codepoints.svg'));

    it('test svg high unicode codepoint and ligature conversion', function () {
        assert.equal(hucpTtf.glyf.length, 3); // original file has missing + 3 glyfs, one of which is a ligature, so total after conversion should be 4 - 1 = 3
        assert.equal(hucpTtf.glyf[1].unicode[0], 0x0ffffa);
        assert.equal(hucpTtf.glyf[2].unicode[0], 0x0ffffb);
    });

});

describe('读错误svg数据', function () {

    it('test read svg error', function () {
        assert.throws(function () {
            svg2ttfobject('');
        });

        assert.throws(function () {
            svg2ttfobject('<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg></svg>');
        });

    });
});
