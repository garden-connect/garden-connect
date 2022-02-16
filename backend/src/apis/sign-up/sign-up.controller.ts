import {Request, Response} from 'express';
import {setActivationToken, setHash} from '../../utils/auth.utils';


import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';