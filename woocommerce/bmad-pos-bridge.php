<?php
/**
 * Plugin Name: APEX INDUSTRIAL B2B — WooCommerce Blocksy POS & Urgency Bridge
 * Description: Syncs Cloudflare Edge tokens and in-store POS stock matrix with WooCommerce.
 * Version: 1.0.0
 */
if (!defined('ABSPATH')) exit;
add_action('wp_head', function() {
  echo '<style>:root { --color-primary: #2563EB; --color-dark: #0F172A; }</style>';
});
