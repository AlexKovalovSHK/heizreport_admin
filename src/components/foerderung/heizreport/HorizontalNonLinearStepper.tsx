import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectStep1 from './step_project/ProjectStep1';
import ProjectStep2 from './step_project/ProjectStep2';
import ProjectStep4 from './step_project/ProjectStep4';
import ProjectStep8 from './step_project/ProjectStep8';
import ProjectStep3 from './step_project/ProjectStep3';
import ProjectStep5 from './step_project/ProjectStep5';
import ProjectStep6 from './step_project/ProjectStep6';
import ProjectStep7 from './step_project/ProjectStep7';

const steps = [
  {
    label: '1. Start',
    component: <ProjectStep1 />,
  },
  {
    label: '2. Fachpartner',
    component: <ProjectStep2 />,
  },
  {
    label: '3. Antragsteller',
    component: <ProjectStep3 />,
  },
  {
    label: '4. Immobilie',
    component: <ProjectStep4 />,
  },
  {
    label: '5. Heizung',
    component: <ProjectStep5 />,
  },
  {
    label: '6. Bonus',
    component: <ProjectStep6 />,
  },
  {
    label: '7. Vertrag',
    component: <ProjectStep7 />,
  },
  {
    label: '8. Förderantrag',
    component: <ProjectStep8 />,
  },
];

export default function HorizontalLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Отображение компонента текущего шага */}
            {steps[activeStep].component}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}