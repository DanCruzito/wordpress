<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'B`73c)MW0zpKn::_I(0gBki,?$RQ-p73Y.Z4+Dspi@p1d5n(>Kf`iZr^u~HA1775' );
define( 'SECURE_AUTH_KEY',  '0ET9]PK};]`Z-TR6h79)nE/ZaS`K*5~b%d(G8*a3ugB+0yMlzxKDj:{7Y7jm(/-9' );
define( 'LOGGED_IN_KEY',    'E-;3~lm!+_Stf1]gO!rP)RB!%I~j4`{?iz#9C(r3X[eW266B-De29|>kOLGBqCxR' );
define( 'NONCE_KEY',        '26+xNeNwfiI^(^7G%9S2Dq-6hI/bII1OKYX~|!O16=#;NdjJ#rG-FTRggeA]MWk[' );
define( 'AUTH_SALT',        '5BN%-`Bn8Ppi}QFA0#.5t,{|uC<PgX5bt)f@D3EMbX_:(`UD3F*|HObfd9xdN6d_' );
define( 'SECURE_AUTH_SALT', '=t c-N8cC#zuKVj#<NBA[NkmKkttPM)87U.ak(t~%Il,@D;thX2XUht=kSJAF,Nx' );
define( 'LOGGED_IN_SALT',   'Z!)#YJlDQP=vbU^:|uYc#a&2rs1a|/^q1GC@:UQ[JIaq/oBW wNSzO@LI(^AOeur' );
define( 'NONCE_SALT',       'DvYaAt%@^1M$5}.i5b|81p5Hj}^UX0Odd+]nn9(eu]o)QhZc4goJy.if[~`{5aP*' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
