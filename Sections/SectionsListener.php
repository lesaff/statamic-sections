<?php

namespace Statamic\Addons\Sections;

use Statamic\Extend\Listener;

class SectionsListener extends Listener
{
    /**
     * The events to be listened for, and the methods to call.
     *
     * @var array
     */
    public $events = [
        'cp.add_to_head' => 'sectionsCSS'
    ];

    /**
     * Initialize Sections CSS
     * @return string
     */
    public function sectionsCSS()
    {
        // Get UI type from addon settings
        $ui_type = $this->getConfig('ui_type');

        $addon_css = $this->css->url('sections.css');
        $html  = '<link rel="stylesheet" href="' . $addon_css . '" />';
        $html .= '<script type="text/javascript">';
        $html .= 'var SectionsUI = \'' . $ui_type . '\';';
        $html .= '</script>';
        return $html;
    } 
}
